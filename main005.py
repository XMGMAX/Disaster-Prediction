"""Random ML algorithm demo

This script generates a synthetic classification dataset, selects a random
classifier from a small pool (LogisticRegression, RandomForest, SVC,
GradientBoosting), trains it, evaluates it, and saves the trained model to
`src/api/models/random_model.joblib`.

Usage:
	python main005.py --n-samples 1000 --seed 42

"""

from __future__ import annotations

import argparse
import os
import random
import warnings
from pathlib import Path

import joblib
import numpy as np
from sklearn.datasets import make_classification
from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC


def get_classifiers(random_state: int = 0):
	"""Return a mapping of simple classifiers to choose from."""
	return {
		"logreg": LogisticRegression(max_iter=2000, random_state=random_state),
		"rf": RandomForestClassifier(n_estimators=100, random_state=random_state),
		"svc": SVC(probability=True, random_state=random_state),
		"gb": GradientBoostingClassifier(n_estimators=100, random_state=random_state),
	}


def make_and_split(n_samples: int = 1000, n_features: int = 20, seed: int = 0):
	X, y = make_classification(
		n_samples=n_samples,
		n_features=n_features,
		n_informative=max(2, n_features // 4),
		n_redundant=0,
		n_classes=2,
		random_state=seed,
	)
	return train_test_split(X, y, test_size=0.2, random_state=seed)


def ensure_dir(path: Path):
	path.parent.mkdir(parents=True, exist_ok=True)


def main():
	warnings.filterwarnings("ignore")

	parser = argparse.ArgumentParser(description="Random ML algorithm demo")
	parser.add_argument("--n-samples", type=int, default=1000)
	parser.add_argument("--n-features", type=int, default=20)
	parser.add_argument("--seed", type=int, default=0)
	parser.add_argument(
		"--save-path",
		type=str,
		default=os.path.join("src", "api", "models", "random_model.joblib"),
	)
	args = parser.parse_args()

	print(f"Generating synthetic data (n={args.n_samples}, features={args.n_features}) with seed={args.seed}")
	X_train, X_test, y_train, y_test = make_and_split(args.n_samples, args.n_features, args.seed)

	classifiers = get_classifiers(random_state=args.seed)
	choice_name = random.choice(list(classifiers.keys()))
	clf = classifiers[choice_name]

	print(f"Chosen classifier: {choice_name} -> {clf.__class__.__name__}")
	clf.fit(X_train, y_train)

	preds = clf.predict(X_test)
	acc = accuracy_score(y_test, preds)

	print(f"Accuracy: {acc:.4f}")
	print("Classification report:")
	print(classification_report(y_test, preds))
	print("Confusion matrix:")
	print(confusion_matrix(y_test, preds))

	save_path = Path(args.save_path)
	ensure_dir(save_path)
	joblib.dump({"model": clf, "meta": {"seed": args.seed, "choice": choice_name}}, save_path)
	print(f"Saved trained model to: {save_path}")


if __name__ == "__main__":
	main()
#hsjdhswhdshdjsjdxhsdhs