toast("进入");

toastwait("123456", 100);

function toastwait(str, time) {
  importClass(android.widget.Toast);
  importClass(android.view.Gravity);
  var mToast = Toast.makeText(context, str, Toast.LENGTH_LONG);
  mToast.show();
  setTimeout(() => {
    mToast.cancel();
    clearInterval(id);
  }, time);
}
