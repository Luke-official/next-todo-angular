export const togglePageScroll = (open: boolean) => {
  const body = document.getElementsByTagName('html');
  if (!body) return;
  if (open) body[0].classList.add('scroll-y-hidden');
  else body[0].removeAttribute('class');

  console.log(body);
};
