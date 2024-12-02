import Database from "../Database/index.js";

export function deleteEnrollment(courseId) {
    const {courses, enrollments} = Database;
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.course !== courseId
    );
    return 200;
}

export function findAllCourses() {
    return Database.courses;
}

export function findCoursesForEnrolledUser(userId) {
    const {courses, enrollments} = Database;
    return courses.filter((course) =>
        enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
}

export function createCourse(course) {
    const newCourse = {...course, _id: Date.now().toString()};
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
}

export function updateCourse(courseId, courseUpdates) {
    const {courses} = Database;
    const course = courses.find((course) => course._id === courseId);
    if (course === undefined) {
        return null;
    }
    Object.assign(course, courseUpdates);
    return course;
}
