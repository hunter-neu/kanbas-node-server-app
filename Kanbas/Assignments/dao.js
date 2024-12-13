import Database from "../Database/index.js";

export function getCourseAssignments(courseId) {
    const {assignments} = Database;
    return assignments.filter((a) => a.course === courseId);
}

export function deleteAssignment(courseId, assignmentId) {
    const {assignments} = Database;
    Database.assignments = assignments.filter((a) => !(a.course === courseId && a._id === assignmentId));
    return 200;
}

export function createAssignment(courseId, assignment) {
    const newAssignment = {...assignment, _id: new Date().getTime().toString()};
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function updateAssignment(courseId, assignmentId, assignmentUpdates) {
    const {assignments} = Database;
    const assignment = assignments.find((assignment) => assignment.course === courseId && assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}