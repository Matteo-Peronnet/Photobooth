import RPi.GPIO as GPIO
import time
import datetime
import zerorpc

c = zerorpc.Client()
c.connect("tcp://127.0.0.1:4242")



GPIO.setmode(GPIO.BCM)

GPIO.setup(19, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(20, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(21, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23

try:
    while True:
        if GPIO.input(23) == False: 
             print('Button Pressed...')
             c.event("BUTTON")
             time.sleep(1)
        elif GPIO.input(19) == False:
            print('Droite Pressed...')
            c.event("KEY_RIGHT")
            c.event("RPC")
            time.sleep(0.2)
        elif GPIO.input(16) == False:
            print('Haut Pressed...')
            c.event("KEY_UP")
            time.sleep(0.2)
        elif GPIO.input(20) == False:
            print('Bas Pressed...')
            c.event("KEY_DOWN")
            time.sleep(0.2)
        elif GPIO.input(21) == False:
            print('Gauche Pressed...')
            c.event("KEY_LEFT")
            time.sleep(0.2)
except:
    GPIO.cleanup()