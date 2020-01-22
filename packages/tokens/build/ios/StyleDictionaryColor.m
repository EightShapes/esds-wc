
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Wed, 22 Jan 2020 22:31:21 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.824f green:0.294f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.910f green:0.322f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.675f blue:0.553f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
