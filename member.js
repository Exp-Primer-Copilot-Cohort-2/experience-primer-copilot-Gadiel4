function skillsMember() {
  const member = document.querySelector('.member');
  const memberImage = document.querySelector('.member-image');
  const memberInfo = document.querySelector('.member-info');
  const memberSkills = document.querySelector('.member-skills');
  const memberSkillsList = document.querySelector('.member-skills-list');
  const memberSkillsItems = document.querySelectorAll('.member-skills-item');

  memberSkillsItems.forEach(item => {
    item.addEventListener('click', () => {
      memberSkillsItems.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
    });
  });

  memberSkills.addEventListener('click', () => {
    memberImage.classList.toggle('hidden');
    memberInfo.classList.toggle('hidden');
  });
}
