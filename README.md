# Attain-assignment

Dependencies used:-
1.express
2.mongoose
3.bcryptjs
4.jsonwebtoken

Public endpoints are:-
get/posts everyone can read the posts by using this endpoint
post/users -to create new user profile
post/users/login - to login


protected endpoints
get/users/me -to get user details
post/posts -only authorised user can create post
patch/posts:id - only authorised user can update post
delete/posts:id- only authorised user can delete post
