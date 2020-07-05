// Enums (Перечисления)
enum Membership {
    simple,
    Standard,
    Premium
}

const membership = Membership.Standard
console.log(membership)
const membershipReverse = Membership[2]
console.log(membershipReverse)


enum SocialMedia {
    VK = "VK",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM"
}
const social = SocialMedia.VK
console.log(social)