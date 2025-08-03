// components/FamilyMemberModal.tsx
'use client';

import React, { useState } from 'react';
import { RelationshipType, FamilyMemberData } from '@/types/types';

const disorderList = [
  "Autism Spectrum Disorder (ASD)",
  "Attention Deficit Hyperactivity Disorder (ADHD)",
  "Learning Disabilities",
  "Intellectual Disability",
  "Speech or Language Disorders",
  "Epilepsy or Seizure Disorders",
  "Schizophrenia or Psychotic Disorders",
  "Depression (clinical)",
  "Bipolar Disorder",
  "Alzheimer’s or Dementia",
  "OCD or Anxiety Disorders",
  "Substance Abuse / Addiction",
  "Other neurological condition"
];

type Props = {
  memberName: string;
  data: FamilyMemberData;
  onSave: (data: FamilyMemberData) => void;
  onClose: () => void;
};

export default function FamilyMemberModal({ memberName, data, onSave, onClose }: Props) {
  const [form, setForm] = useState<FamilyMemberData>(data);

  const updateDisorder = (key: string, field: 'checked' | 'who' | 'ageOfOnset', value: any) => {
    setForm((prev) => ({
      ...prev,
      disorders: {
        ...prev.disorders,
        [key]: {
          ...prev.disorders[key],
          [field]: value
        }
      }
    }));
  };

  return (
    <div className="fixed inset-0 bg-black text-black flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">Family Member: {memberName}</h2>

        <label className="block font-medium">Relationship Type</label>
        <select
          multiple
          className="w-full border p-2 mb-4"
          value={form.relationships}
          onChange={(e) => {
            const selected = Array.from(e.target.selectedOptions).map((opt) => opt.value as RelationshipType);
            setForm({ ...form, relationships: selected });
          }}
        >
          {["Mother", "Father", "Sibling", "Grandparent (maternal)", "Grandparent (paternal)", "Uncle/Aunt (first degree)", "Cousin (first degree)"].map((rel) => (
            <option key={rel} value={rel}>{rel}</option>
          ))}
        </select>

        <div className="mb-4">
          <label className="block font-medium">Diagnosed Neuro/Mental Condition?</label>
          <div className="flex gap-4">
            <label><input type="radio" checked={form.hasNeuroCondition} onChange={() => setForm({ ...form, hasNeuroCondition: true })} /> Yes</label>
            <label><input type="radio" checked={!form.hasNeuroCondition} onChange={() => setForm({ ...form, hasNeuroCondition: false, neuroConditionDetails: '' })} /> No</label>
          </div>
          {form.hasNeuroCondition && (
            <input
              className="w-full border p-2 mt-2"
              placeholder="Specify condition"
              value={form.neuroConditionDetails || ''}
              onChange={(e) => setForm({ ...form, neuroConditionDetails: e.target.value })}
            />
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2">Neurological & Mental Conditions</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
          {disorderList.map((disorder) => (
            <div key={disorder}>
              <label>
                <input
                  type="checkbox"
                  checked={form.disorders[disorder]?.checked || false}
                  onChange={(e) => updateDisorder(disorder, 'checked', e.target.checked)}
                /> {disorder}
              </label>
              {form.disorders[disorder]?.checked && (
                <div className="ml-4">
                  <input
                    className="w-full border p-1 mb-1"
                    placeholder="Specify who"
                    value={form.disorders[disorder]?.who || ''}
                    onChange={(e) => updateDisorder(disorder, 'who', e.target.value)}
                  />
                  <input
                    className="w-full border p-1"
                    placeholder="Age of onset (optional)"
                    value={form.disorders[disorder]?.ageOfOnset || ''}
                    onChange={(e) => updateDisorder(disorder, 'ageOfOnset', e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-medium">Genetic or Chromosomal Disorder</label>
          <input
            className="w-full border p-2"
            placeholder="e.g., Fragile X, Down Syndrome"
            value={form.geneticDisorder || ''}
            onChange={(e) => setForm({ ...form, geneticDisorder: e.target.value })}
          />
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => onSave(form)}>Save</button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
