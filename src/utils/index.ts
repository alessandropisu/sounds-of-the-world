function getCookie(input: string) {
  const cookies = document.cookie.split(';');

  if (document.cookie) {
    for (let i = 0; i < cookies.length; i++) {
      const name = cookies[i].split('=')[0].toLowerCase().trim();
      const value = cookies[i].split('=')[1].toLowerCase();
      if (name === input) {
        return value;
      }

      if (value === input) {
        return name;
      }
    }
  }

  return '';
}

export { getCookie };
