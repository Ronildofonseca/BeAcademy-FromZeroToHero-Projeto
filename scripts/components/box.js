export default function ({ title, message }) {
    return /* html */ `
  
        ${repeat(title, (titles) => {
          return `<h4>${titles.title}</4>`;
        })}
  
  
      ${repeat(message, (texts) => {
        return `
  
            ${repeat(texts, (message) => {
              return `<p>${message.texts}</p>`;
            })}
          
        `;
      })}
  
  `
  ;
  }
  