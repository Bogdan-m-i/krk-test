import { throttle } from '@/js/utils';

(function _() {
  const taskList = document.querySelector('.task-list');
  if (!taskList) return;

  const taskFilter = taskList.querySelector('#taskFilter');
  const tasks = taskList.querySelector('.task-list__items').children;

  const inputHandler = throttle((e) => {
    const val = e.target.value.trim().toLowerCase();

    [...tasks].forEach((el) => {
      if (el.textContent.toLowerCase().includes(val)) el.style.display = null;
      else el.style.display = 'none';
    });
  });

  taskFilter.addEventListener('input', inputHandler);
}());
