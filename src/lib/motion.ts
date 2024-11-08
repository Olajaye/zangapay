
export function slideInFromRight(delay: number) {
  return {
    hidden: { x: "100px", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 2,
      },
    },
  };
 }
 
 export function slideInFromButtom(delay: number) {
   return {
     hidden: { y: "100px", opacity: 0 },
     visible: {
       y: 0,
       opacity: 1,
       transition: {
         delay: delay,
         duration: 2,
       },
     },
   };
 }
 
 export function slideInFromRightAngle(delay: number) {
   return {
     hidden: { 
       x: "30%",  // Start off-screen to the right
       y: "-90px", // Start slightly up (you can adjust this to control the angle)
       opacity: 0, 
     },
     visible: {
       x: 0,       // End at the normal position (no horizontal offset)
       y: 0,       // End at the normal vertical position
       opacity: 1, // Fully visible
       transition: {
         delay: delay,
         duration: 2,  // Transition duration
         ease: "easeOut", // Smooth easing
       },
     },
   };
 }
 
 export function slideInFromTop(delay: number) {
   return {
     hidden: { y: "-100px", opacity: 0 },
     visible: {
       y: 0,
       opacity: 1,
       transition: {
         delay: delay,
         duration: 2,
       },
     },
   };
 }
 
 export function beVisible(delay: number) {
   return {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         delay: delay,
         duration: 2,
       },
     },
   };
  }
 
 export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: "-100px", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 2,
      },
    },
  };
 }
 
 
 