import cv2 as cv
import numpy as np

image = cv.imread("stevejob.png")

# Draw Rectangle
cv.rectangle(image, (470, 20), (770, 420), (255, 0, 0), thickness=2)

# Draw circle
cv.circle(
    image,
    (620, 530),
    100,
    (
        0,
        255,
    ),
    thickness=4,
)

# Draw line
cv.line(
    image,
    (50, 350),
    (400, 350),
    (0, 0, 255),
    thickness=4,
)

# Write Text
cv.putText(
    image, "Steve Job", (70, 330), cv.FONT_HERSHEY_COMPLEX, 2.0, (255, 255, 0), 5
)
cv.imshow("Drawing", image)

cv.waitKey(0)
