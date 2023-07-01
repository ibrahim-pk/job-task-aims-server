post request:http://localhost:5000/api/user

input:
{
"name": "Md.Ibrahim Pk",
"mobile":"0174522221122",
"email":"emonnstu15@gmail.com",
"password": "123456"

}

output:
{
"success": true,
"message": "save data successfully",
"data": {
"mobile": 174522221122,
"email": "emonnstu15@gmail.com",
"password": "123456",
"\_id": "649e4db5977746a352df7bc7",
"createdAt": "2023-06-30T03:36:21.612Z",
"updatedAt": "2023-06-30T03:36:21.612Z",
"\_\_v": 0
}
}

get request:http://localhost:5000/api/user
patch request:http://localhost:5000/api/user/id
delete request:http://localhost:5000/api/user/id
