import cv2 as cv

# Read Image
image = cv.imread("stevejob.png")

# Draw Rectangle
cv.rectangle(image, (0, 0), (250, 250), (255, 0, 0), thickness=2)

# Draw circle
cv.circle(
    image,
    (image.shape[1] // 2, image.shape[0] // 2),
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
    (100, 0),
    (image.shape[1] // 2, image.shape[0] // 2),
    (0, 0, 255),
    thickness=4,
)

# Write Text
cv.putText(image, "Hello", (200, 50), cv.FONT_HERSHEY_COMPLEX, 1.0, (255, 255, 0), 2)

# Show image
cv.imshow("Drawing", image)

cv.waitKey(0)
