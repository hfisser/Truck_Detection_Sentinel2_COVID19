# Truck Detection with Sentinel-2 during COVID-19 crisis
This repository is designated to detecting trucks using Sentinel-2 data.

It was developed during the COVID-19 crisis in order to monitor the impact of the crisis.

## Method

The offset of different wavelengths that moving objects have in Sentinel-2 data causes a specific reflectance relationship in the RGB, which looks like a rainbow. The method only targets the blue part of the spectrally disassembled truck since the dominance of blue reflectance is rare over land surfaces. This blue part of the truck serves as a marker. 
In order to reduce false positives, it is crucial to first mask areas that are definitely no trucks. High potential for confusions is given for example in shadows of buildings and snow, which are initially masked using reflectance thresholds and spectral indices. 

In the initial step, a road mask is calculated and the data is masked to these pixels. The road mask is based on NDVI, NDWI, NDSI, B11-B03-ratio and absolute thresholds of B02, B03, B04 and B11. All following conditions must be fulfilled:

- B02 > 0.04 _avoid building shadows
- B03 > 0.04 _avoid building shadows
- B04 > 0.04 _avoid building shadows
- B04 < 0.15 _avoid industry, greenhouses and other surfaces of very high reflectance
- B03 < 0.15
- B02 < 0.4 _be less strict with blue as we target it
- NDVI < 0.7 _avoid vegetation but keep in mind mixed pixels
- NDWI < 0.001 _avoid water
- NDSI < 0.0001 _avoid snow
- B11 > 0.05
- B11 < 0.55

Afterwards, the ratios between B02 (blue) and B03 (green) and B02 and B04 (red) are calculated. The following thresholds are applied to these ratios:

- B02-B03-ratio > 0.05
- B02-B04-ratio > 0.1

The ratio of blue (B02) and green (B03) has a less strict threshold since the blue and the green parts of the truck are next to each other and thus slightly mix.

![Method](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/method_neu.png)

Generally, each truck is represented by one to three pixels with value 1 in the result. All connected pixels are counted as one truck. For counting and visualizing the detections the results can be vectorized, which the scripts in this repository do not do. In the presented case, this was done in QGIS.

## Results: Example of detected trucks

This is an example of detected trucks around Rotterdam, Netherlands. The results were vectorized.

![Trucks detected around Rotterdam](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/ts7_trucks.jpeg)

##  Results: Comparison before vs. during COVID-19 by weekday
Here, you see truck count trajectories detected in the Ruhr area in Germany, grouped by weekday.

![Truck count by weekday before and during COVID-19](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19/blob/master/results.png)
