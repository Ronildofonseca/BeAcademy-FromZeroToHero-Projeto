import createNode from "../helpers/createNode.js";
import repeat from "../helpers/repeat.js";

export default function ({ columns, items }) {
  return createNode('table', {
    border: 1,
    style: "color: var(--color-primary)",
    innerHTML: /* html */ `
      <thead>
        <tr>
          ${repeat(columns, (column) => {
            return `<th>${column.title}</th>`;
          })}
        </tr>
      </thead>
      <tbody>
        ${repeat(items, (item) => {
          return `
            <tr>
              ${repeat(columns, (column) => {
                return `<td>${item[column.field]}</td>`;
              })}
            </tr>
          `;
        })}
      </tbody>
    `
  });
}