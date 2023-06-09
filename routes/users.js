var express = require('express');
var router = express.Router();
var userAuth = require('../middlewares/userAuth');
var controller = require('../controllers/userController');



router.get('/', controller.homepage);

router.get('/login', controller.login);

router.get ('/logout', controller.logout);

router.post('/login', controller.postLogin)

router.get('/signup', controller.signup);

router.post('/signup', controller.postSignup);

router.post('/search', controller.search);

router.get('/shop/:id', controller.shop);

router.post('/shop/filter', controller.shopFilter);

router.get('/pagination', controller.pagination);

router.get('/product-details/:id', controller.productDetails);

router.get('/profile', userAuth.varifyLogin, controller.userProfile);

router.post('/personal-datas/:id',userAuth.varifyLogin, controller.editUserData);

router.get('/address', userAuth.varifyLogin, controller.getAddress);

router.get('/add-address', userAuth.varifyLogin, controller.addAddress);

router.post('/add-address/:id',userAuth.varifyLogin, controller.addAddressPost);

router.post('/edit-address/:id',userAuth.varifyLogin, controller.editAddressPost);

router.post('/add-delivery-address/:id', controller.addDeliveryAddress);

router.get('/remove-address/:id',userAuth.varifyLogin, controller.removeAddress);

router.get('/change-password', userAuth.varifyLogin, controller.changePassword);

router.post('/change-password/:id',userAuth.varifyLogin, controller.changePasswordPost);

router.get('/new-password', userAuth.varifyLogin, controller.newPassword);

router.post('/new-password/:id',userAuth.varifyLogin, controller.newPasswordPost);

router.get('/otp-login', controller.otpLogin);

router.post('/otp-verify', controller.otpVerify);

router.post('/otp-user-data', controller.otpUserData);

router.get('/cart-products', userAuth.varifyLogin, controller.cartDetails);

router.get('/add-to-cart/:id', userAuth.varifyLogin, controller.addToCart);

router.get('/shop-add-to-cart', userAuth.varifyLogin, controller.homeAddToCart);

router.post('/change-product-quantity', userAuth.varifyLogin, controller.cartQuantity);

router.post('/remove-cartproducts', userAuth.varifyLogin, controller.cartRemove);

router.get('/check-out', userAuth.varifyLogin, controller.placeOrder);

router.post('/check-out-address', userAuth.varifyLogin, controller.addOrderAddress);

router.post('/apply-coupon', userAuth.varifyLogin, controller.applyCoupon);

router.post('/post-order', userAuth.varifyLogin, controller.placeOrderPost);

router.get('/my-orders', userAuth.varifyLogin, controller.MyOrders);

router.get('/order-details/:id', userAuth.varifyLogin, controller.orderDetails);

router.post('/change-order-status', userAuth.varifyLogin, controller.myOrderStatus);

router.post('/verify-payment', userAuth.varifyLogin, controller.varifyPayment);

router.get('/order-success', userAuth.varifyLogin, controller.successPage);

router.get('/wishList', userAuth.varifyLogin, controller.wishList);

router.post('/wishList', userAuth.varifyLogin, controller.wishListPost);

router.post('/remove-wishlist', userAuth.varifyLogin, controller.removeWishlist);

router.get('/my-wallet', userAuth.varifyLogin, controller.myWallet)


module.exports = router;
