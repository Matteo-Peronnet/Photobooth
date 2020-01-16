import RPi.GPIO as GPIO
from socketIO_client import SocketIO, LoggingNamespace

GPIO.setmode(GPIO.BCM)

GPIO.setup(19, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(20, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23
GPIO.setup(21, GPIO.IN, pull_up_down=GPIO.PUD_UP)#Button to GPIO23

try:
    while True:
        with SocketIO('127.0.0.1', 8000, LoggingNamespace) as socketIO:
            if GPIO.input(23) == False: 
                print('Button Pressed...')
                socketIO.emit( 'event', "BUTTON")
                time.sleep(1)
            elif GPIO.input(19) == False:
                print('Droite Pressed...')
                socketIO.emit( 'event', "KEY_RIGHT")
                time.sleep(0.2)
            elif GPIO.input(16) == False:
                print('Haut Pressed...')
                socketIO.emit( 'event', "KEY_UP")
                time.sleep(0.2)
            elif GPIO.input(20) == False:
                print('Bas Pressed...')
                socketIO.emit( 'event', "KEY_DOWN")
                time.sleep(0.2)
            elif GPIO.input(21) == False:
                print('Gauche Pressed...')
                socketIO.emit( 'event', "KEY_LEFT")
                time.sleep(0.2)
except:
    GPIO.cleanup()