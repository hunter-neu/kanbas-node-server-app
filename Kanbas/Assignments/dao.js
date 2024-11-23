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