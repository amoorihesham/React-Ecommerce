export async function removeAllCart() {
  const { data } = await clearCart();

  toast('Cart Cleard Successfully', {
    type: 'success',
    autoClose: 1000,
    hideProgressBar: false,
  });
}
