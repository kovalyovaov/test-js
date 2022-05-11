const getFriends = (users) =>
users.flatMap(user=>user.friends).
filter((friend, index, array)=>array.indexOf(friend)===index);