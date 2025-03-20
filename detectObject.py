from ultralytics import YOLO
import cv2

model = YOLO("yolov8m.pt")

items=['bowl','donut','broccoli','orange','dining table','cup']
def checkObject( img ):

    try:

        print(f"./uploads/{img}")

        image=cv2.imread(f"./uploads/{img}")
        image=cv2.resize(image,(300,300))
        cv2.imwrite(f"./uploads/{img}",image)
        results = model.predict(f"./uploads/{img}")
        result = results[0]

        len(result.boxes)

        box = result.boxes[0]

        # print("Object type:", box.cls)
        # print("Coordinates:", box.xyxy)
        # print("Probability:", box.conf)

        cords = box.xyxy[0].tolist()
        class_id = box.cls[0].item()
        conf = box.conf[0].item()
        # print("Object type:", class_id)
        # print("Coordinates:", cords)
        # print("Probability:", conf)

        cords = box.xyxy[0].tolist()
        cords = [round(x) for x in cords]
        class_id = result.names[box.cls[0].item()]
        conf = round(box.conf[0].item(), 2)
        print("Object type:",class_id)
        print("Coordinates:",cords)

        print(f"Class id : {class_id}")

        if class_id in items:
            return 1
        else:
            return -1
        # print("Probability:",conf)
    except Exception as e :
        print("No object detected")
        print(e)

        return -1

# flag=isCow("img1023.jpg")

# print(f"Flag = {flag}")


# flag=checkObject("17135184401884890111564507809787.jpg")

# print(f"flag = {flag}")