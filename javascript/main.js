Create.addEventListener("click", createUser);

// function create User

function createUser() {
  if (Create.innerHTML == "انشاء فاتوره") {
    if (
      myID.value &&
      inputName.value &&
      inputPhon.value &&
      inputAddress.value &&
      inputCount.value &&
      inputSize.value
    ) {
      table.innerHTML += `
                 <tbody id="tBody">
                    <tr>
                         <th scope="row"id="inId">${myID.value}</th>
                         <td id="inName">${inputName.value}</td>
                         <td id="inPhon">${inputPhon.value}</td>
                         <td id="inAddress">${inputAddress.value}</td>
                         <td id="inCount">${inputCount.value}</td>
                         <td id="inSize">${inputSize.value}</td>
                         <td id="inCat">${inputCategory.value}</td>
                         <td id="inPrice">${inputPrice.value}</td>
                         <td class = 'd-flex justify-content-around'>
                         <i class="fa-solid fa-pen-to-square UpDate"></i>
                         <i class="fa-solid fa-trash delete "></i>
                         </td>
                    </tr> 
                 </tbody>
                `;
      clearData();
      myError.innerHTML = ``;

      //    btn   delete  items

      let btnDelete = document.querySelectorAll(".delete");
      let btnUpdate = document.querySelectorAll(".UpDate");

      btnDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          table.removeChild(e.composedPath()[3]);
        });
      });

      //   btn  Update data

      btnUpdate.forEach((btn) => {
        btn.addEventListener("click", () => {
          editData();
        });
      });
    } else {
      myError.innerHTML = `<h1 class = 'text-center' > املاء كل الخانات من فضلك</h1>`;
    }
  } else {
    Create.innerHTML = "انشاء فاتوره";
  }
}

//   function clear data

function clearData() {
  myID.value = "";
  inputName.value = "";
  inputPhon.value = "";
  inputAddress.value = "";
  inputCount.value = "";
  inputSize.value = "";
  inputCategory.value = "";
  inputPrice.value = "";
}

//   function edit data

function editData() {
  myID.value = inId.innerHTML;
  inputName.value = inName.innerHTML;
  inputPhon.value = inPhon.innerHTML;
  inputAddress.value = inAddress.innerHTML;
  inputCount.value = inCount.innerHTML;
  inputSize.value = inSize.innerHTML;
  inputCategory.value = inCat.innerHTML;
  inputPrice.value = inPrice.innerHTML;
  Create.innerHTML = "تعديل";
}
