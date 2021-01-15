const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // CREATION
  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleHead = document.createElement('h1');
  const tempSpan = document.createElement('span');

  // CLASS ADJUSTMENT
  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  // HIERARCHY
  header.appendChild(dateSpan);
  header.appendChild(titleHead);
  header.appendChild(tempSpan);

  // CONTENT
  dateSpan.textContent = date;
  titleHead.textContent = title;
  tempSpan.textContent = temp;

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const makeHeader = Header('The Lambda Times', 'January 15, 2021', '26°');
  const selected = document.querySelector(selector);
  selected.appendChild(makeHeader);
}

export { Header, headerAppender }
