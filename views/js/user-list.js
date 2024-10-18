document.addEventListener('DOMContentLoaded', () => {
  let userId = 'asdassd123awe'; // User ID to fetch
  getDataById(userId);
  getData();
});

document.querySelector('#addUser').addEventListener('click', () => {
  console.log('Button clicked');
  let formData = document.querySelector('#userForm');
  let dataSend = new FormData(formData);
  let jsonObj = {};
  dataSend.forEach((value, key) => {
    jsonObj[key] = value;
  });
  console.log(jsonObj);
  $.ajax({
    url: '/users',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(jsonObj),
    success: function (response) {
      console.log('Success:', response);
      $('#exampleModal').modal('hide');
      getData();
    },
    error: function (xhr, status, error) {
      console.log('Error:', error);
    },
  });
});

const getDataById = (id) => {
  console.log('Get data by ID:', id);
  $.ajax({
    url: `/users/${id}`,
    type: 'GET',
    success: function (response) {
      console.log('Success:', response);
    },
    error: function (xhr, status, error) {
      console.log('Error:', error);
    },
  });
};

const getData = () => {
  $.ajax({
    url: '/users',
    type: 'GET',
    success: function (response) {
      let container = document.querySelector('#container-users');
      let htmlData = '';
      response.forEach((user, index) => {
        htmlData += `
          <tr>
            <th width="1%" class="text-center">${index + 1}</th>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td style="width: 1%;">
              <div class="btn-group-vertical">
                <button id="${user.id}" class="btn btn-sm btn-primary btn-show">Show</button>
                <button id="${user.id}" class="btn btn-sm btn-warning btn-edit">Edit</button>
                <button id="${user.id}" class="btn btn-sm btn-danger btn-delete">Delete</button>
              </div>
            </td>
          </tr>
        `;
      });
      container.innerHTML = htmlData;
    },
    error: function (xhr, status, error) {
      console.log('Error:', error);
    },
  });
};
