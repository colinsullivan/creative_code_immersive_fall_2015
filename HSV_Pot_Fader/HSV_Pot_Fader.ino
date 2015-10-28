#include "FastLED.h"

// this is the variable we will use to store the color of our LED.  Notice
// it is a variable of type `CRGB`, a special type from the `FastLED`
// library.
CRGB color;

int LEDGreenPin = 9;
int LEDBluePin = 10;
int LEDRedPin = 11;

int sensorPin = 0;
int val;

void setup(){
  Serial.begin(9600);
}

void loop(){
  
  // grab the current value of the potentiometer, mapping it to [0, 255]
  val = map(analogRead(sensorPin),0,1024,0,255);

  // create a color, using the value from our pot as the "hue".  Here, we
  // set both the saturation and value to 255 (HSV).
  color = CHSV(val, 255, 255);
  
  // now we write this color to the LED, using the `r`, `g`, and `b` 
  // attributes of our `color` object, which has already converted the HSV
  // color to RGB
  analogWrite(LEDRedPin,color.r);
  analogWrite(LEDBluePin,color.b); 
  analogWrite(LEDGreenPin,color.g);
  delay(10);
}
