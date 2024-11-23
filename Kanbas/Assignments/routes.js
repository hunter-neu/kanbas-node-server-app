import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const {courseId} = req.params;
        const status = dao.getCourseAssignments(courseId);
        res.send(status);
    })
    app.delete("/api/courses/:courseId/assignments/:assignmentId", (req, res) => {
        const {courseId, assignmentId} = req.params;
        dao.deleteAssignment(courseId, assignmentId);
        res.send(200);
    })
}