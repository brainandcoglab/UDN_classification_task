# UDN Submarine Study 1: Calibration

* Start with most extreme: HL all there and HL not at all
* then procede with binary search from there.


Okay, so here's the procedure. We estimate initially what that threshold value is. We then pick 5? increments / decrements above / below that value. We do 10 trials of each, asking if present / absent. We then fit a sigmoid functino to the data after 10 participants. Cool.

an issue: The alpha makes the rectangle line overlap things annoyingly. We can fix this by rendering somewhere else first... but I don't really know how to do that, or how best to integrate that within the psychojs rendering pipeline.

Okay, so first of all, we use alphafilter instead of setting opacity.

Second of all, we set linestyle alignment to be 0, inner (we have to dig into the psychojs lib to do so). This means line won't overflow rectange vertices. Last of all, we set line colour slightly different so that it's actually visible.