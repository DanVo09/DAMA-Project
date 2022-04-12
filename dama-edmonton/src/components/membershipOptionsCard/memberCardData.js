
import { v4 as uuidv4 } from "uuid";

const MemberCardData = [
    {
        id:uuidv4(),
        title: "Corporate Membership - Unlimited",
        detail: "You can add an unlimited number of named members to your plan",
        price: 1500
    },

    {
        id:uuidv4(),
        title: "Corporate Membership - 10",
        detail: "You can add up to 10 named members to your plan",
        price: 400
    },

    {
        id:uuidv4(),
        title: "Corporate Membership - 5",
        detail: "You can add up to 5 named members to your plan",
        price: 300
    },

    {
        id:uuidv4(),
        title: "Individual Membership",
        detail: "Individual membership for IT and Data professionals",
        price: 75
    },

    {
        id:uuidv4(),
        title: "Student Membership",
        detail: "Individual membership for students",
        price: 25
    }

]

export default MemberCardData