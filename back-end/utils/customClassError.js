// @desc this class is responsible about operation errors (errors i can predict it)
class CustomClassError extends Error {
  constructor(message , statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
    this.isOperitional = true
  }
}

module.exports = CustomClassError;