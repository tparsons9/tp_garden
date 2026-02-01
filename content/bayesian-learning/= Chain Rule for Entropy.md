---
up: "[[Shannon Entropy]]"
aliases:
tags:
  - concept/property
  - micro/information
mathLink: $H(X,Y)=H(X)+H(Y\mid X)$
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
---
The **Chain Rule for Entropy** states that the total uncertainty (entropy) of a joint distribution is the sum of the uncertainty of one variable, plus the expected remaining uncertainty of the second variable *after* the first is known. Formally,

>[!property] Property (Chain Rule for Entropy).
>Suppose $(X,Y)\in \mathcal{X}\times \mathcal{Y}$ with $\mathcal{X}=\{ x_{1},\dots,x_{n} \}$ and $\mathcal{Y}=\{ y_{1},\dots,y_{m} \}$, where the joint distribution of $X$ and $Y$ is denoted $p$, the marginal distribution of $X$ is $p_{X}$, and the conditional distribution of $Y$ given $X$ is $p_{Y\mid X}$. Then,
> $$
> H(p) = H(p_{X}) + \sum_{i=1}^{n} p_{X}(x_{i})H(p_{Y\mid X=x_{i}})
> $$
> or more simply,
> $$
> H(X,Y) = H(X)+H(Y\mid  X)
> $$

Where, 
- $H(X,Y)$ is the joint entropy of both variables
- $H(X)$ the marginal entropy of $X$
- $H(Y\mid X)$ the **conditional entropy** of $Y$ given $X$. 

This formalizes the following definition, 

>[!definition] Definition (Conditional Entropy).
>For two random variables $(X,Y)$, with joint distribution $p$, the **conditional entropy** of $Y$ given $X$ is given by, 
>$$
>H(Y\mid  X)\equiv \sum_{i=1}^{n} p_{X}(x_{i})H(p_{Y\mid  X=x_{i}})
>$$

>[!rocket] Intuition
>The rule is an intuitive way to decompose uncertainty. Imagine trying to find out the value of both $X$ and $Y$. The total uncertainty you must resolve is $H(X,Y)$, which can be found by:
>1. First resolving the uncertainty about $X$ $(H(X))$.
>2. Then, resolving the **expected remaining** uncertainty about $Y$ once you know $X$, $H(Y\mid X)$

---

## Discussion

### Special Case: Independent Variables

 If $X$ and $Y$ are independent, knowing $X$ tells you nothing about $Y$.
 Therefore, the conditional entropy $H(Y|X)$ simplifies to $H(Y)$. In this case, the chain rule becomes:
 $$
H(X, Y) = H(X) + H(Y) 
$$
### Related Concepts

This rule is one of the key axioms used in [[Khinchin (1957) Axiomatization of Entropy]], and it forms the foundation for understanding how [[(Entropy) Information Reduces Uncertainty|information reduces uncertainty.]] 