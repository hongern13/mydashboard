import cv2 as cv
img = cv.imread("cats.jpg")
cv.imshow("Original", img)

# Convert to gray
gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
cv.imshow("Gray", gray)

# Convert to HSV
hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)
cv.imshow("HSV", hsv)

# Convert to RGB
rgb = cv.cvtColor(img, cv.COLOR_BGR2RGB)
cv.imshow("RGB", rgb)

# Convert to Canny Edge
canny = cv.Canny(img, 125, 175)
cv.imshow("Canny Edges", canny)

# Convert to Blur
blur = cv.GaussianBlur(img, (7, 7), cv.BORDER_DEFAULT)
cv.imshow("Blur", blur)

cv.waitKey(0)
