import Member from "@/app/utils/types/models/member";

export type Student = {
    id: string
    firstName: string,
    lastName: string,
    gradeLevel: string,
    streetName: string,
    city: string,
    parish: string,
    emergencyContactNumber: string,
    secondaryEmergencyContactNumber: string,
    parentId: string,
    parent: Member,
    createdAt: string,
    updatedAt: string
}