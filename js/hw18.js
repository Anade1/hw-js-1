// Задання 1

const users = [
    {name: 'rick', balance: 1000 },
    {name: 'bob', balance: 200765 },
    {name: 'bro', balance: 300 },
  ];
  
  const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
  
  console.log(totalBalance);
  





// Задання 2

const walkingDeadCharacters = [
    { name: 'Rick', friends: ['Daryl', 'Michonne'] },
    { name: 'Daryl', friends: ['Rick', 'Carol'] },
    { name: 'Michonne', friends: ['Rick', 'Daryl'] },
  ];
  
  const targetFriendName = 'Daryl';

  const charactersWithTargetFriend = walkingDeadCharacters
    .filter(character => character.friends.includes(targetFriendName))
    .map(character => character.name);
  
  console.log(charactersWithTargetFriend);
  




// Задання 3

const twdCharacters = [
    { name: 'Rick', friends: ['Daryl', 'Michonne'] },
    { name: 'Daryl', friends: ['Rick', 'Carol'] },
    { name: 'Michonne', friends: ['Rick', 'Daryl'] },
  ];
  
  twdCharacters.sort((characterA, characterB) => characterA.friends.length - characterB.friends.length);
  
  const sortedTwdNames = twdCharacters.map(character => character.name);
  
  console.log(sortedTwdNames);
  






// Задання 4




const skillUsers = [
    { name: 'User1', skills: ['JavaScript', 'HTML', 'CSS'] },
    { name: 'User2', skills: ['Python', 'JavaScript', 'React'] },
    { name: 'User3', skills: ['HTML', 'CSS', 'React'] },
  ];
  
  const uniqueSkills = skillUsers.flatMap(user => skillUser.skills)
    .filter((value, index, self) => self.indexOf(value) === index);
  
  const sortedSkills = uniqueSkills.sort();
  
  console.log(sortedSkills);
  