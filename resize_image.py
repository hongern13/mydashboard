import cv2 as cv
# read image
img = cv.imread("outing_large.jpg")

# resize image
scale = 0.2 
width = int(img.shape[1]*scale)
height = int(img.shape[0]*scale)
dim = (width, height)
img = cv.resize(img, dim, interpolation = cv.INTER_AREA)

# show image
cv.imshow("Outing", img)

cv.waitKey(0)
