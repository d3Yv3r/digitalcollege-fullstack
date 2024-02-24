export function create(list, label, key) {
  return list.map(function (item) {
    return `<option value='${
      item[key] ? item[key] : ""
    }'>${item[label]}</option>`;
  });
}

export function createEmpty(list, label, key) {
  //                           Cria um novo array com o <option></option> antes e o restante do array
  return ["<option></option>", ...create(list, key, label)];
}

export default function render(list, label, key, startEmpty = false) {
  let result = [];
  if (startEmpty) {
    result = createEmpty(list, key, label);
    return result.join("");
  }

  result = create(list, key, label);

  return result.join("");
}
