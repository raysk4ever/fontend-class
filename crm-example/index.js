let customers = []

function handleAdd() {
  const id = document.getElementById('id').value
  const b = document.getElementById('name').value
  const e = document.getElementById('email').value
  const mobile = document.getElementById('mobile').value
  const newCustomer = {
    id: id,
    name: b,
    email: e,
    mobile: mobile
  }
  customers.push(newCustomer)
  console.log(customers, 'customers')
  const customerListDiv = document.getElementById('customer-list')
  
  const customerDiv = document.createElement('div')
  customerDiv.className = 'customer-item'
  // <div class='customer-item'></div>
  
  const idSpan = document.createElement('span')
  // <span></span>
  idSpan.innerText = newCustomer.id
  // <span>1</span>
  const nameSpan = document.createElement('span')
  nameSpan.innerText = newCustomer.name
  // <span></span>
  const emailSpan = document.createElement('span')
  emailSpan.innerText = newCustomer.email
  // <span></span>
  const mobileSpan = document.createElement('span')
  mobileSpan.innerText = newCustomer.mobile
  // <span></span>
  
  customerDiv.appendChild(idSpan)
  /*
    <div>
      <span>1</span>
    </div>
  */
  customerDiv.appendChild(nameSpan)
    /*
    <div>
      <span></span>
      <span></span>
    </div>
  */
  customerDiv.appendChild(emailSpan)
  customerDiv.appendChild(mobileSpan)
  /*
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  */
  customerListDiv.appendChild(customerDiv)


}
