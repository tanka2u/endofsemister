function Tasks({ children }) {
  return(
    <>
    <div class="container">
        <div class="form-header">
            <h1><b>Create New Task</b></h1>
        </div>
        <div class="form-section">
            <form>
                <div class="form-field">
                    <label for="relatedEvent">Related Event</label>
                    <select id="relatedEvent" name="relatedEvent">
                        <option value="event1">Event 1: Tech Conference</option>
                        <option value="event2">Event 2: Annual Meetup</option>
                    </select>
                </div>
                <div class="form-field">
                    <label for="taskTitle">Task Title</label>
                    <input type="text" id="taskTitle" name="taskTitle"/>
                </div>
                <div class="form-field">
                    <label for="taskDescription">Task Description</label>
                    <textarea id="taskDescription" name="taskDescription"></textarea>
                </div>
                <div class="form-field">
                    <label for="taskDeadline">Deadline</label>
                    <input type="date" id="taskDeadline" name="taskDeadline"/>
                </div>
                <div class="form-field">
                    <label for="taskAssignee">Assignee</label>
                    <select id="taskAssignee" name="taskAssignee">
                        <option value="user1">User 1</option>
                        <option value="user2">User 2</option>
                        <option value="user3">User 3</option>
                    </select>
                </div>
                <div class="form-field">
                    <button type="submit" class="button">Create Task</button>
                </div>
            </form>
        </div>
    </div>
    </>
);
}
export default Tasks;
