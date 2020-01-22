
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Wed, 22 Jan 2020 22:31:21 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorWhite,
ColorBlack,
ColorOrange82,
ColorOrange91,
ColorOrange93
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
