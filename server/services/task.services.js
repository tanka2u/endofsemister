class TaskService {
    async create(task) {
        return task.save()
        .then(savedTask => {
            console.log('Task saved:', savedTask);
            return true;
        })
        .catch(err => {
            console.error('Error saving task:', err);
            return false;
        });

    }
}

module.exports = TaskService;