export default class UserTable {
   constructor(rows) {
      let table = document.createElement('table');
      let thead = `<thead>
  <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
  </tr>
</thead>`;
      table.innerHTML = thead;
      let tbody = document.createElement('tbody');

      rows.forEach(function (item) {
         let tr = document.createElement('tr');
         tr.innerHTML = `<td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button>X</button></td>`;

         tbody.appendChild(tr);

      });
      table.appendChild(tbody);
      this.elem = table;

      this.elem.addEventListener('click', function (event) {

         if (event.target.tagName == 'BUTTON') {
            console.log(event.target.closest('tr'));
            event.target.closest('tr').remove();
         }

      });
   }


}