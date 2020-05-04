# Truck_Detection_Sentinel2_COVID19
This repository is designated to detecting trucks using Sentinel-2 data.

The detection exploits the offset of different wavelengths reflected by moving objects. It targets pixels where blue is higher than green and red. First, a road mask is calculated and the data is masked to these pixels. Second, the ratios between blue and green and blue and red are calculated. Finally, thresholds are applied to these ratios. Each truck is represented by one to three pixels with value 1 in the result. In order to visualize the results they may be vectorized, which this script does not do.

This is an example of detected trucks around Rotterdam, Netherlands. The results were vectorized.

![Test](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/ts7_trucks.jpeg)
