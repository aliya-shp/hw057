const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

let frontendTotalTime = tasks
    .filter(task => task.category === 'Frontend')
    .map(task => task.timeSpent)
    .reduce((sum, time) => sum + time);
console.log(`Total time spent on Frontend tasks: ${frontendTotalTime}`);

let bugTotalTime = tasks
    .filter(task => task.type === 'bug')
    .map(task => task.timeSpent)
    .reduce((sum, time) => sum + time);
console.log(`Total time spent on bugs: ${bugTotalTime}`);

// let totalTasksUI = tasks.filter(task => task.title.includes('UI'));
// console.log(`Total number of UI tasks: ${totalTasksUI.length}`);

let totalTasksUI = (tasks.filter(task => task.title.includes('UI'))).length;
console.log(`Total number of UI tasks: ${totalTasksUI}`);

let tasksAmount = () => {
    let frontendTasks = tasks.filter(task => task.category === 'Frontend');
    let backendTasks = tasks.filter(task => task.category === 'Backend');
    return {Frontend: frontendTasks.length, Backend: backendTasks.length};
};
console.log('Total number of tasks by category: ', tasksAmount());

let bigTime = () => {
    let bigTimeTasks = tasks.filter(task => task.timeSpent > 4);
    bigTimeTasks.map(task => {
        delete task.id;
        delete task.timeSpent;
        delete task.type;
});
return bigTimeTasks;
};
console.log(bigTime());