---
up: "[[Shannon Entropy]]"
aliases:
tags:
  - concept/property
  - micro/information
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
mathLink: $H(Y\mid  X)\leq H(Y)$
---
The following property states that: 

> **conditioning on information can never increase expected uncertainty**

The expected entropy of a variable $Y$ _after_ observing another variable $X$ is always less than or equal to the original [[Shannon Entropy|entropy]] of $Y$.


>[!property] Property (Information Reduces Uncertainty).
> For any two random variables $(X,\ Y)$, 
> $$
> H(Y\mid  X)\leq H(Y)
> $$
> with equality if and only if $X$ and $Y$ are independent.

Where, 
- $H(Y)$ is the initial (prior) entropy of $Y$
	- It represents your uncertainty about $Y$ *before* you learn anything. 
- $H(Y\mid X)$ is the expected (posterior) entropy of $Y$ after $X$ observed
	- It is your average uncertainty about $Y$ after you learn $X$. 
