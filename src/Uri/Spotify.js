const clientId = "f764b5d13420496f92dffbad388c95ed"; // Ваш клиентский ID Spotify
const redirectUri = "https://jamming-virid.vercel.app/"; // Ваш redirect URI
let accessToken; // Переменная для хранения токена доступа
let expiresIn; // Переменная для хранения времени жизни токена

const Spotify = {
  // Метод для получения токена доступа
  getAccessToken() {
    if (accessToken) {
      return accessToken; // Возвращаем токен, если он уже получен
    }

    const params = new URLSearchParams(window.location.hash.substring(1));
    accessToken = params.get("access_token");
    expiresIn = params.get("expires_in");

    if (accessToken) {
      // Устанавливаем таймер для сброса токена по истечении его срока действия
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      // Убираем токен из URL для безопасности
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    }

    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl; // Перенаправляем пользователя на страницу авторизации
  },

  search(term) {
    const token = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  // Метод для сохранения плейлиста
  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const token = this.getAccessToken();
    if (!token) {
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    return fetch("https://api.spotify.com/v1/me", { headers })
      .then((response) => response.json())
      .then((data) => {
        const userId = data.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: "POST",
          headers,
          body: JSON.stringify({ name }),
        })
          .then((response) => response.json())
          .then((playlist) => {
            const playlistId = playlist.id;
            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                method: "POST",
                headers,
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export default Spotify;
