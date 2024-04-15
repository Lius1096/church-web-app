// CookieManager.js

const CookieManager = {
    // Fonction pour définir un cookie
    setCookie: (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
  
    // Fonction pour récupérer la valeur d'un cookie
    getCookie: (name) => {
      const cookieName = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return "";
    },
  
    // Fonction pour supprimer un cookie
    deleteCookie: (name) => {
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
    }
  };
  
  export default CookieManager;
  