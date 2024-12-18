import React from 'react'

const Calendar = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&src=dXJiYW5wYXJrMDFAZ21haWwuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
      style={{ border: 'solid 1px #777' }}
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}

export default Calendar