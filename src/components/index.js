const cart = ["eggs", "apples", "oranges"];

const promise = createOrder(cart);
console.log(promise);

//promise.then(function(orderId){
  //console.log(orderId);
//})

function createOrder(cart){
  
  const pr  = new Promise( (resolve, reject) => {
  // validate cart
  // return orderId 
  if(!validateCart(cart)){
    const err = new Error("cart not valid");
    reject(err);
  }
  // logic for create order
  const orderId = "12345";
  if(orderId){
    resolve(orderId);
  }})}

function validateCart() {
  return true;
}
